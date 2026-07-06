export default function MyButton({children, onClick}){
    return(
        <li><button onClick ={onClick}>{children}</button></li>

    )

}
