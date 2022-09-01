import React,{useState,useEffect} from 'react' 
import './Home.css';
import Product from './Product';
import Footer from './Footer';
 

function Home() {

  // const [pageCount,setPageCount]=useState(0)
  // const [currentPageNo,setCurrentPageNo] = useState(1)
  
  // const paginationItems=[];
  //   for(let i=1;i<=pageCount;i++){
  //       paginationItems[i]=<a href="#" key={i} onClick={()=>setCurrentPageNo(i)}>{i}</a>
  //   }

  

  return (
    <div className='home'>
        <div className='homeContainer'>
            <img className='homeImage' src='https://www.barnesandnoble.com/blog/wp-content/uploads/2022/06/PROD-23504_BestBooks_Blogpost_1920x490_r2.jpeg?w=1400&h=400&crop=1'/>

          <div className='homeRow'>
          <Product 
            id='1'
            title='Reminders of Him (Center Point Large Print)
            by Colleen Hoover  | 1 February 2022' 
            price={299}
            image='https://boookd.com/wp-content/uploads/2022/05/rem1.jpg'
            rating={5}
          />

          <Product 
            id='2'
            title='The Love Hypothesis: The Tiktok sensation and romcom of the year!
            by Ali Hazelwood  | 27 September 2021'
            price={249}
            image='https://boookd.com/wp-content/uploads/2022/04/410LR0SAI7L.jpg'
            rating={4}
          />

          <Product 
            id='3'
            title='SPANISH LOVE AND DECEPTION, Elena Armas: TikTok made me buy it!
            by Elena Armas  | 1 January 2021'
            price={250}
            image='https://boookd.com/wp-content/uploads/2022/06/41D7i-zFRL.jpg'
            rating={5}
          />

        <Product 
           id='4'
           title='Layla
           by Colleen Hoover  | 8 December 2020'
           price={300}
           image='https://boookd.com/wp-content/uploads/2022/05/41L6P1e780L.jpg'
           rating={5}
          />
          </div>
          <div className='homeRow'>
            <Product
              id='5'
              title='The Song of Achilles
              by Madeline Miller  | 10 April 2019'
              price={300}
              image='https://boookd.com/wp-content/uploads/2022/03/51PH05QauDL.jpg'
              rating={5}
            />
            <Product
               id='6'
               title='The Seven Husbands of Evelyn Hugo: A Novel
               by Taylor Jenkins Reid  | 29 May 2018'
               price={300}
               image='https://boookd.com/wp-content/uploads/2022/05/1-600x933.jpg'
               rating={5}
            />
            <Product
              id='7'
              title='Ugly Love: A Novel
              by Colleen Hoover  | 5 August 2014'
              price={300}
              image='https://boookd.com/wp-content/uploads/2022/03/41g9RfNVZBL.jpg'
              rating={5}
            />
          </div>
          <div className='homeRow'>
          <Product
               id='8'
               title='November 9: A Novel Paperback | 15 December 2015'
               price={300}
               image='https://m.media-amazon.com/images/P/1501110349.01._SCLZZZZZZZ_SX500_.jpg'
               rating={5}
            />
            <Product
              id='9'
              title='Regretting You
              by Colleen Hoover  | 10 December 2019'
              price={300}
              image='https://images-na.ssl-images-amazon.com/images/I/41vFmvXy+uL._SY344_BO1,204,203,200_.jpg'
              rating={5}
            />
          </div>
          <div> 
              {/* <div className="pagination"> 
                <a href="#">&laquo;</a> 
                  {/* {paginationItems}  
                <a href="#">&raquo;</a> 
             </div>  */}
          </div> 
        </div>
        
    </div>
  )
}

export default Home