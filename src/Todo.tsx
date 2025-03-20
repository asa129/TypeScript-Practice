import { TodoType } from './types/todo';

export const Todo = (props: Omit<TodoType , 'id'>) => {
    const {title, userId, completed = true}  = props;
    const displayComplete = completed ? `[完]` : `[未]`;
    return (
        <>
            <p>{`${displayComplete}タイトル:${title}(ユーザー:${userId})`}</p>
        </>
    );
}