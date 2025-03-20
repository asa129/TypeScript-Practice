type TodoType = {
    userId: number;
    title: string;
    completed?: boolean;
};

export const Todo = (props: TodoType) => {
    const {title, userId, completed = true}  = props;
    const displayComplete = completed ? `[完]` : `[未]`;
    return (
        <>
            <p>{`${displayComplete}タイトル:${title}(ユーザー:${userId})`}</p>
        </>
    );
}