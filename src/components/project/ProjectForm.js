import styles from "./ProjectForm.module.css"
import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"

function ProjectForm({btnText}){
    return(
        <form className={styles.form}>
            <div><Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do projeto" /></div>
            <div><Input type="Number" text="Orçamento do Projeto" name="budge" placeholder="Insira o orçamento total" /></div>
            <Select name="category_id" text="Selecione a categoria"/>
            <SubmitButton text={btnText}/>
        </form>
    )
}
export default ProjectForm