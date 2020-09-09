export function User(entityDto) {

    return {
        id: entityDto ? entityDto.id : "",
    }
}

export type IUser = ReturnType<typeof User>;

export function UserList(entityDtoList: IUser[] = []) {
    const _entityListDto: IUser[] = [];

    entityDtoList.forEach((item) => {
        _entityListDto.push(User(item));
    });

    return _entityListDto;
}
