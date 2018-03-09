import { Component } from 'react'

export class MasterDetail extends Component {
  constructor(props){
    super(props)
      this.state = {
        master: [
          {
            img: "../../../dist/assets/#.jpg",
            name_E: "Venerable Master Ming Kuang",
            name_C: "明光法師",
              bkg_E: [
                {
                  point: "Born in Taipei, Taiwan in 1952."
                },{
                  point: "Frequented Hai Ming Monastery in student days, and inspired by Reverend Wu Ming."
                },{
                  point: "Ordained by Rev. Sheng Hsiung at Da Hsiung Vihara in 1978 and appointed as the abbot in 1983 as well as founded Buddhist class and summer camp for children."
                },{
                  point: "Founder and Director of Georgia Buddhist Summer Camp."
                }
              ],
            bkg_C: "1952年出生於台灣台北,幼年長流連於海明寺,受教於悟明長老,法師於1978年依止於 聖雄法師,並於台北大雄精舍出家,1983年被聘為大雄精舍住持,1988年應邀到美國莊嚴 寺,主持兒童夏令營,1993年擔任莊嚴寺方丈,法師現任台北觀音禪院、日月潭玄裝寺住 持、中華民國國策顧問,也是喬治亞州夏令營創始人。"
          }
        ]
      }
  }

  render(){
    return(
      <div className="master_box col-xs-12 col-sm-12 col-md-12">
          <span className="col-xs-12 col-sm-2 col-md-2">
            <div className="center_img">
              <img className="master_img" src={this.state.master.img}>
            </div>
          </span>
          <span className="col-xs-12 col-sm-10 col-md-10">
              <strong>{this.state.master.name_E}</strong><br>
              <strong>{this.state.master.name_C}</strong><br>
              <span>
                {this.state.master.bkg_E}
              </span>
                <br>
              <span>
                {this.state.master.bkg_C}
              </span>
                <br>
          </span>
      </div>
    )
  }

}
