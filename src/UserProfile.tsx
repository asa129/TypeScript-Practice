import { FC } from "react";
import { User } from "./types/user";

type props = {
    user: User;
}

export const UserProfile: FC<props> = (props) => {
    const { user } = props;
    return (
    <>
    <dt>名前</dt>
    <dd>{user.name}</dd>
    <dt>趣味</dt>
    <dd>{user.hobby?.join("/")}</dd>
    </>
    );
}