headerPage = () => {
  let page = $("#page_title");

  switch (page){
    case menu: "MENU"; break;
    case about: "ABOUT"; break;
    case speakers: "SPEAKERS"; break;
    case gallery: "GALLERY"; break;
    case contact: "CONTACT"; break;
    case register: "REGISTER"; break;
    default: " ";
  }
}

export const PageHeader = ({month="May", date_b="25th", date_e="28th", year="2018", address="Hard Labor Creek State Park, Rutledge, GA"}) => {
  <div id="title_body" className="bg-title_body col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div className="inner_section pos_r align-text-bottom">
        <div className="align-text-bottom title_div col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <p id="gabsc_title"   className="gabsc">
              Georgia Buddhist Summer Camp
            </p>
            <p id="date" className="idate">
              {month} {date_b} - {date_e}, {year}
            </p>
            <p id="location" className="location">
              {address}
            </p>
        </div>
        <div className="pos_a align_bottom align_right col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <p id="page_title" className="page_tit">{this.headerPage()}</p>
        </div>
    </div>
</div>
}

// import { Component } from "react"
//
// headerPage = () => {
//   let page = $("#page_title");
//
//   switch (page){
//     case menu: "MENU"; break;
//     case about: "ABOUT"; break;
//     case speakers: "SPEAKERS"; break;
//     case gallery: "GALLERY"; break;
//     case contact: "CONTACT"; break;
//     case register: "REGISTER"; break;
//     default: " ";
//   }
// }
//
// export class PageHeader extends Component {
//   constructor(props){
//     super(props)
//       this.state = {
//         general: [
//           {
//             month: "May",
//             date_b: "25th",
//             date_e: "28th",
//             year: 2018,
//             Address: "Hard Labor Creek State Park, Rutledge, GA"
//           }
//         ]
//       }
//   }
//
//   render(){
//     return(
//       <div id="title_body" className="bg-title_body col-xs-12 col-sm-12 col-md-12 col-lg-12">
//         <div className="inner_section pos_r align-text-bottom">
//             <div className="align-text-bottom title_div col-xs-12 col-sm-6 col-md-6 col-lg-6">
//                 <p id="gabsc_title"   className="gabsc">
//                   Georgia Buddhist Summer Camp
//                 </p>
//                 <p id="date" className="idate">
//                   {this.state.general.month} {this.state.general.date_b} - {this.state.general.date_e}, {this.state.general.year}
//                 </p>
//                 <p id="location" className="location">
//                   {this.state.general.address}
//                 </p>
//             </div>
//             <div className="pos_a align_bottom align_right col-xs-12 col-sm-6 col-md-6 col-lg-6">
//                 <p id="page_title" className="page_tit">{this.headerPage()}</p>
//             </div>
//         </div>
//     </div>
//     )
//   }
// }
