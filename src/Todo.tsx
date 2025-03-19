export const Todo = (props: any) => {
    const {title, userid}  = props;
    return (
        <>
            <p>{`タイトル:${title}(ユーザー:${userid})`}</p>
        </>
    );
}