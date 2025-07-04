import ReactMarkdown from 'react-markdown'

 function Output(props){
 
    return(
        <>
            <section>
    <h2>Chef-UG Recommends:</h2>
    
    <ReactMarkdown>
    {props.recipe}
    </ReactMarkdown>

</section>

        </>

    )
}
export default Output