import Button from "../Button/Button.tsx";
import {useState} from "react";
import styles from "./AddForm.module.scss";

interface AddFormProps {
    addType: string;
}

const AddForm = (props: AddFormProps) => {
    const {addType} = props;
    const [textArea, setTextArea] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = async () => {
        if (!textArea.trim()) return;

        const items = textArea
            .split("\n")
            .map(item => item.trim())
            .filter(item => item.length > 0);

        setIsLoading(true);

        try {
            console.log(items)
            setTextArea("");
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextArea(e.target.value);
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{`Create ${addType}s`}</h2>
            <textarea
                className={styles.textarea}
                value={textArea}
                onChange={changeHandler}
                autoComplete="off"
                placeholder="Example:
First
Second"
                rows={5}
                cols={20}
                disabled={isLoading}
            />
            <Button
                className={styles.button}
                type="submit"
                onClick={submitHandler}
                disabled={!textArea.trim() || isLoading}
            >
                {isLoading ? "Добавление..." : "Добавить"}
            </Button>
        </div>
    );
}

export default AddForm;