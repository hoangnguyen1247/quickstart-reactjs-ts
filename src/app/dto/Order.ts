export function Order(entityDto) {

    return {
        id: entityDto ? entityDto.id : "",
    }
}

export type IOrder = ReturnType<typeof Order>;

export function OrderList(entityDtoList: IOrder[] = []) {
    const _entityListDto: IOrder[] = [];

    entityDtoList.forEach((item) => {
        _entityListDto.push(Order(item));
    });

    return _entityListDto;
}
