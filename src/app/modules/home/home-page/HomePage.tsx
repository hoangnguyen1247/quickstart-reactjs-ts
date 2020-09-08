import React from "react";
import PlusIcon from "mdi-react/PlusIcon";
import { Button } from "reactstrap";
import { I18n } from "react-redux-i18n";
import { Helmet } from "react-helmet-async";

import { Header } from "src/app/shared/header/Header";
import { PageInner } from "src/app/shared/page-inner/PageInner";
import { NavigationBar } from "src/app/shared/navigation/NavigationBar";
import { Toolbar } from "src/app/shared/toolbar/Toolbar";
import { Footer } from "src/app/shared/footer/Footer";

import { JumbotronBanner } from "src/app/shared/jumbotron-banner/JumbotronBanner";
import { AutoplayCarousel } from "src/app/shared/carousel/AutoplayCarousel";

import { ExampleListCard } from "./children/ExampleListCard";
import { CalendarCard } from "./children/CalendarCard";

function HomePage(props) {

    const homeI18n = I18n.t("home");
    const banners = [
        {
            mobileSrc: "",
            desktopSrc: "",
        },
    ];
    const items = [
        {
            value: 1,
        },
        {
            value: 2,
        },
        {
            value: 3,
        },
    ];

    return (
        <div>
            <Helmet>
                <title>{homeI18n.meta.title}</title>
            </Helmet>
            <Header
            />
            <JumbotronBanner>
                <AutoplayCarousel
                    items={banners}
                    itemClassName="embed-responsive-item"
                />
            </JumbotronBanner>
            <div className="d-flex">
                <NavigationBar />
                <PageInner>
                    <Toolbar
                        breadcrumbItems={[
                            { label: "Hello" },
                            { label: "Hello" },
                        ]}
                        breadcrumbActiveItemLabel="Home"
                    >
                        <Button>
                            <PlusIcon />
                        </Button>
                    </Toolbar>
                    <div>
                        Content
                    </div>
                    <ExampleListCard
                        items={items}
                    />
                    <ExampleListCard
                        items={items}
                        useDragHandle={true}
                    />
                </PageInner>
            </div>
            <CalendarCard
            />
            <Footer />
        </div>
    );
}

export default HomePage;
