import { FC } from "react"; 

type style = {
    color: string;
    fontSize: number;
}

export const Text: FC<style> = (props) => {
    const { color, fontSize } = props;
    return <p style={{color, fontSize}}>テキストだよ</p>
}