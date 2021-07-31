import './getdataLoc.css'
import BarLine from './barline'

const CreateGraph = (props) => {


    var gdata = props.gdata

return (<div>
            <div className="flexBox">
                {
                    gdata.map(
                        (item,i) =>
                            <BarLine 
                            number={item['avg']}
                            date={item['day']} 
                            max={item['max']}
                            min={item['min']}
                            key={i} />
                    )
                
                }
            </div>
        </div>)
  
}


export default CreateGraph