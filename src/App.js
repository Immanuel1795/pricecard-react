import './App.css';
import Pricecards from "./Card";
import priceCardsData from "./Pricecards";

function App() {
  return (
    <div>
    <section className="pricing py-5">
        <div className="container">
            <div className="row">
              {
                priceCardsData.map((item)=>{
                  return (                            
                    <div className="col-lg-4">
                      <Pricecards
                        type={item.type}
                        amount={item.amount}
                        period={item.period}
                        user={item.user}
                        storage={item.storage}
                        projects={item.projects}
                        access={item.access}
                        private={item.private}
                        support={item.support}
                        domain={item.domain}
                        status={item.status}                       
                      />
                    </div> )
                })
              }
            </div>
          </div>
    </section>
    </div>   
  )
}
export default App;
