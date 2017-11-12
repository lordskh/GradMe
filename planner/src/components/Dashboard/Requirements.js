import React from 'react'
import CardFold from './CardFold.js'
import CardHead from './CardHead.js'

class Requirements extends React.Component {

    constructor(props) {
        super();
        /** The names prop is rendered as module titles.
            Need 1) data to be outputted in logical format,
                 2) a parser in Dashboard.js to turn data into
                    valid string.
         **/
        // const names = this.props.names;

        // /** Generate description for Requirements stating all 
        //     chosen majors, minors, and tracks. */
        // let description = '';
        // for (let i=0;i<names.length;i++) {
        //     if (i===names.length - 1) {
        //         description += names[i] + '.'
        //     } else if (i===(names.length - 2)) {
        //         description += names[i] + ', and '
        //     } else {
        //         description += names[i] + ", "
        //     }
        // }

        // this.state = {
        //     description,
        //     names,
        //     categories
        // }
        this.state = {
            data: props.categories,
        }
    }
    /* receives array of requirement categories as props from Dashboard.js 
    	and conditionally renders */
    render() {
        const cats = this.state.data;
        return (
            <div className="section insetShadow">
                <div className="sectionCaption">
                    <h className="sectionTitle">Your curriculum</h>
                    <p className="subtitle">Requirements and courses calculated for a major in {cats.curriculum}.</p>
                </div>
                    <div className="ui centered grid">
                    <div className="ui doubling stackable sixteen wide row">

                    {cats.categories.map(function(cat,i) {
                        if (cat.courses == null && cat.subcategories == null) {
                            return (
                                <div key={i} className="seven wide column hover" style={{'padding': '0', 'margin': '0 10px'}}>
                                    <CardHead title={cat.label} credits={cat.credits}/>
                                </div>
                            )
                        } else {
                            return (
                                <div key={i} className="seven wide column hover" style={{'padding': '0', 'margin': '0 10px'}}>
                                    <CardFold title={cat.label} courses={cat.courses} options={cat.subcategories} credits={cat.credits}/>
                                </div>
                            )
                        }
                    })}
     
                    </div>
              
                    </div>
            </div>
        );
    }    
}

export default Requirements;