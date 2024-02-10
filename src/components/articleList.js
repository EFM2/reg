import { useState } from "react";
import { connect, useSelector } from "react-redux";

/* function ArticleList(){
    const articles = useSelector(data=>data.articles)
    const keyWord = useSelector(data=>data.keyWord)
    return(<>
            <h2>List des articles</h2>
            <ul>
                {articles.map((article,index)=>{
                    return(<li key={index}>Id : {article.id} Title : {article.title} </li>)
                })}
            </ul>

    </>)
}
export default ArticleList; */
function ArticleList(props) {
    
/*     
 */    
return (
      <>
        <h2 >List des articles</h2>

        <ul>
          {props.articles.filter((article)=>props.keyword?article.title==props.keyword:true).map((article, index) => (
            <li key={index}>
              Id: {article.id} Title: {article.title}
            </li>
          ))}
        </ul>
      </>
    );
  }
  
  const mapStateToProps = (state) => {
    return {
      articles: state.articles,
      keyword: state.keyWord,

    };
  };
  
  export default connect(mapStateToProps, null)(ArticleList);