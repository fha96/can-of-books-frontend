import React from "react";

export default class Form extends React.Component{




    render(){


        return(
            <>
            <form onSubmit={this.props.submitHandler}>
                <label >Book name : </label>
                <input type="text" placeholder="book name"/>
                <label >Description :</label>
                <input type="text" placeholder="description" />
                <label >Status :</label>
                <input type="text" placeholder="Status"/>
                <input type="submit" value="Add to the list"/>


            </form>
            
            </>
        )
    }
}