import fs from "fs";
import path from "path";

import React from "react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from 'react-helmet-async';

import configureStore from "../src/store";
import App from "../src/App";

const initialData = {

};

const prepHTML = (data, { html, head, body }) => {
    data = data.replace('<html lang="en">', `<html ${html}`);
    data = data.replace('</head>', `${head}</head>`);
    data = data.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  
    return data;
};

export function universalLoader(req, res) {
    const filePath = path.resolve(__dirname, '../build/index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Read error', err);
            return res.status(404).end();
        }

        const context: any = {};
        const helmetContext: any = {};
        const store = configureStore();

        const renderObj = renderToString(
            <Provider store={store} >
                <StaticRouter location={req.url} context={context} >
                    <HelmetProvider context={helmetContext}>
                        <App {...initialData}/>
                    </HelmetProvider>
                </StaticRouter>
            </Provider>
        );

        if (context.url) {
            res.redirect(301, context.url);
            return;
        }

        const { helmet } = helmetContext;
        const html = prepHTML(htmlData, {
            html: helmet.htmlAttributes.toString(),
            head:
                helmet.title.toString() +
                helmet.meta.toString() +
                helmet.link.toString(),
            body: renderObj,
        });

        res.send(html);
    });
}
