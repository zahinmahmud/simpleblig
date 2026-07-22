import React from 'react';

const main = ({blogtopic}) => {
    return (
        <div>
          <div>
            <img src="#" alt="image of the blog" />
          </div>
          <div>
            {blogtopic.map((blog,index)=>(
             <div key={index}>
              <h2>{blog.title}</h2> 
              </div>
            ))}         
      

          </div>
        </div>
    );
};

export default main;