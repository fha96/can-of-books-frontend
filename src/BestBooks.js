import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Welcome from './components/Welcome';
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
      
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {

    /* TODO: render all the books in a Carousel */
   const {isAuthenticated}=this.props.auth0
    return (
      <>
   {isAuthenticated &&
      <div className='bookBest'>

        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
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
