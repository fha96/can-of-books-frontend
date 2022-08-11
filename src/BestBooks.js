import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Welcome from './components/Welcome';
import axios from 'axios';
import BooksTable from './components/BooksTable';
import Form from './components/Form';
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
      
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  
  // http://localhost:3001/books
  componentDidMount= async()=>{
    const url=`${process.env.REACT_APP_EXPRESS}/books`;
    let booksdata= await axios.get(url);
    // console.log(booksdata.data);
    this.setState({
      books:booksdata.data
    });
  }
  deleteBook= async(id)=>{
    console.log(id);
    const url=`${process.env.REACT_APP_EXPRESS}/books/${id}`;
    await axios.delete(url);
    this.componentDidMount();
  }

  createBook= async(e)=>{
    e.preventDefault();
    
    console.log(e.target[0].value);
    const newBook={
      title:e.target[0].value,
      decription : e.target[1].value,
      status : e.target[2].value
    }
    const url=`${process.env.REACT_APP_EXPRESS}/books`;
    await axios.post(url,{newBook});

    this.componentDidMount();

  }
  render() {

    /* TODO: render all the books in a Carousel */
   const {isAuthenticated}=this.props.auth0
    return (
      <>
   {isAuthenticated &&
      <div className='bookBest'>

        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Form submitHandler={this.createBook}/>
        {this.state.books.length ? (
          this.state.books.map(item=>{
            return(
          <div key={item._id}>
            <BooksTable title={item.title} description={item.decription} status={item.status} />
              <button onClick={()=>this.deleteBook(item._id)}>Delete</button>
              
          </div>
          )
          })
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </div>
      }
      {!isAuthenticated&&
      <div className='welcome'>
      <Welcome/>
      </div>
      
      }


      </>
    )
  }
}

export default withAuth0(BestBooks);
