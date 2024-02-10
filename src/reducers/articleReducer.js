const initialisation = {keyWord:"",articles:[]}
const articleReducer = (state = initialisation, action)=>{
    switch(action.type){
        case 'addArticle':
            return {...state, articles:[...state.articles,action.payload]}
            case 'updateArticle':
                return {
                  ...state,
                  articles: state.articles.map(article =>
                    article.id == action.payload.articleId ? { ...article, title: action.payload.content } : article
                  )
                };
                case 'deleteArticle':
                    return {...state,articles:[...state.articles.filter((article)=>article.id!=action.payload)]}
                    case 'searchArticle':
                        return {...state, keyWord:action.payload}
                    default:
                        return state
    }

}
export default articleReducer;