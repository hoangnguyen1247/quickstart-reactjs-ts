export function Staff(entityDto) {

    return {
        id: entityDto ? entityDto.id : "",
    }
}

export type IStaff = ReturnType<typeof Staff>;

export function StaffList(entityDtoList: IStaff[] = []) {
    const _entityListDto: IStaff[] = [];

    entityDtoList.forEach((item) => {
        _entityListDto.push(Staff(item));
    });

    return _entityListDto;
}
