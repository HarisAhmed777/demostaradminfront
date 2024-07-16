import react from 'react'
function Cal(){

  return(
  <div className="card bg-gradient-success">
    <div className="card-header border-0 ui-sortable-handle" style={{cursor: 'move'}}>
      <h3 className="card-title">
        <i className="far fa-calendar-alt" />
        Calendar
      </h3>
      <div className="card-tools">
        <div className="btn-group">
          <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown" data-offset={-52}>
            <i className="fas fa-bars" />
          </button>
          <div className="dropdown-menu" role="menu">
            <a href="#" className="dropdown-item">Add new event</a>
            <a href="#" className="dropdown-item">Clear events</a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">View calendar</a>
          </div>
        </div>
        <button type="button" className="btn btn-success btn-sm" data-card-widget="collapse">
          <i className="fas fa-minus" />
        </button>
        <button type="button" className="btn btn-success btn-sm" data-card-widget="remove">
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
    <div className="card-header border-0 ui-sortable-handle" style={{cursor: 'move'}}>
      <h3 className="card-title">
        <i className="far fa-calendar-alt" />
        Calendar
      </h3>
      <div className="card-tools">
        <div className="btn-group">
          <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown" data-offset={-52}>
            <i className="fas fa-bars" />
          </button>
          <div className="dropdown-menu" role="menu">
            <a href="#" className="dropdown-item">Add new event</a>
            <a href="#" className="dropdown-item">Clear events</a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">View calendar</a>
          </div>
        </div>
        <button type="button" className="btn btn-success btn-sm" data-card-widget="collapse">
          <i className="fas fa-minus" />
        </button>
        <button type="button" className="btn btn-success btn-sm" data-card-widget="remove">
          <i className="fas fa-times" />
        </button>
      </div>
    </div><div className="card-body pt-0">
      <div id="calendar" style={{width: '100%'}}><div className="bootstrap-datetimepicker-widget usetwentyfour"><ul className="list-unstyled"><li className="show"><div className="datepicker"><div className="datepicker-days" style={{}}><table className="table table-sm"><thead><tr><th className="prev" data-action="previous"><span className="fa fa-chevron-left" title="Previous Month" /></th><th className="picker-switch" data-action="pickerSwitch" colSpan={5} title="Select Month">July 2024</th><th className="next" data-action="next"><span className="fa fa-chevron-right" title="Next Month" /></th></tr><tr><th className="dow">Su</th><th className="dow">Mo</th><th className="dow">Tu</th><th className="dow">We</th><th className="dow">Th</th><th className="dow">Fr</th><th className="dow">Sa</th></tr></thead><tbody><tr><td data-action="selectDay" data-day="06/30/2024" className="day old weekend">30</td><td data-action="selectDay" data-day="07/01/2024" className="day">1</td><td data-action="selectDay" data-day="07/02/2024" className="day">2</td><td data-action="selectDay" data-day="07/03/2024" className="day">3</td><td data-action="selectDay" data-day="07/04/2024" className="day">4</td><td data-action="selectDay" data-day="07/05/2024" className="day">5</td><td data-action="selectDay" data-day="07/06/2024" className="day weekend">6</td></tr><tr><td data-action="selectDay" data-day="07/07/2024" className="day weekend">7</td><td data-action="selectDay" data-day="07/08/2024" className="day">8</td><td data-action="selectDay" data-day="07/09/2024" className="day">9</td><td data-action="selectDay" data-day="07/10/2024" className="day">10</td><td data-action="selectDay" data-day="07/11/2024" className="day">11</td><td data-action="selectDay" data-day="07/12/2024" className="day">12</td><td data-action="selectDay" data-day="07/13/2024" className="day weekend">13</td></tr><tr><td data-action="selectDay" data-day="07/14/2024" className="day weekend">14</td><td data-action="selectDay" data-day="07/15/2024" className="day active today">15</td><td data-action="selectDay" data-day="07/16/2024" className="day">16</td><td data-action="selectDay" data-day="07/17/2024" className="day">17</td><td data-action="selectDay" data-day="07/18/2024" className="day">18</td><td data-action="selectDay" data-day="07/19/2024" className="day">19</td><td data-action="selectDay" data-day="07/20/2024" className="day weekend">20</td></tr><tr><td data-action="selectDay" data-day="07/21/2024" className="day weekend">21</td><td data-action="selectDay" data-day="07/22/2024" className="day">22</td><td data-action="selectDay" data-day="07/23/2024" className="day">23</td><td data-action="selectDay" data-day="07/24/2024" className="day">24</td><td data-action="selectDay" data-day="07/25/2024" className="day">25</td><td data-action="selectDay" data-day="07/26/2024" className="day">26</td><td data-action="selectDay" data-day="07/27/2024" className="day weekend">27</td></tr><tr><td data-action="selectDay" data-day="07/28/2024" className="day weekend">28</td><td data-action="selectDay" data-day="07/29/2024" className="day">29</td><td data-action="selectDay" data-day="07/30/2024" className="day">30</td><td data-action="selectDay" data-day="07/31/2024" className="day">31</td><td data-action="selectDay" data-day="08/01/2024" className="day new">1</td><td data-action="selectDay" data-day="08/02/2024" className="day new">2</td><td data-action="selectDay" data-day="08/03/2024" className="day new weekend">3</td></tr><tr><td data-action="selectDay" data-day="08/04/2024" className="day new weekend">4</td><td data-action="selectDay" data-day="08/05/2024" className="day new">5</td><td data-action="selectDay" data-day="08/06/2024" className="day new">6</td><td data-action="selectDay" data-day="08/07/2024" className="day new">7</td><td data-action="selectDay" data-day="08/08/2024" className="day new">8</td><td data-action="selectDay" data-day="08/09/2024" className="day new">9</td><td data-action="selectDay" data-day="08/10/2024" className="day new weekend">10</td></tr></tbody></table></div><div className="datepicker-months" style={{display: 'none'}}><table className="table-condensed"><thead><tr><th className="prev" data-action="previous"><span className="fa fa-chevron-left" title="Previous Year" /></th><th className="picker-switch" data-action="pickerSwitch" colSpan={5} title="Select Year">2024</th><th className="next" data-action="next"><span className="fa fa-chevron-right" title="Next Year" /></th></tr></thead><tbody><tr><td colSpan={7}><span data-action="selectMonth" className="month">Jan</span><span data-action="selectMonth" className="month">Feb</span><span data-action="selectMonth" className="month">Mar</span><span data-action="selectMonth" className="month">Apr</span><span data-action="selectMonth" className="month">May</span><span data-action="selectMonth" className="month">Jun</span><span data-action="selectMonth" className="month active">Jul</span><span data-action="selectMonth" className="month">Aug</span><span data-action="selectMonth" className="month">Sep</span><span data-action="selectMonth" className="month">Oct</span><span data-action="selectMonth" className="month">Nov</span><span data-action="selectMonth" className="month">Dec</span></td></tr></tbody></table></div><div className="datepicker-years" style={{display: 'none'}}><table className="table-condensed"><thead><tr><th className="prev" data-action="previous"><span className="fa fa-chevron-left" title="Previous Decade" /></th><th className="picker-switch" data-action="pickerSwitch" colSpan={5} title="Select Decade">2020-2029</th><th className="next" data-action="next"><span className="fa fa-chevron-right" title="Next Decade" /></th></tr></thead><tbody><tr><td colSpan={7}><span data-action="selectYear" className="year old">2019</span><span data-action="selectYear" className="year">2020</span><span data-action="selectYear" className="year">2021</span><span data-action="selectYear" className="year">2022</span><span data-action="selectYear" className="year">2023</span><span data-action="selectYear" className="year active">2024</span><span data-action="selectYear" className="year">2025</span><span data-action="selectYear" className="year">2026</span><span data-action="selectYear" className="year">2027</span><span data-action="selectYear" className="year">2028</span><span data-action="selectYear" className="year">2029</span><span data-action="selectYear" className="year old">2030</span></td></tr></tbody></table></div><div className="datepicker-decades" style={{display: 'none'}}><table className="table-condensed"><thead><tr><th className="prev" data-action="previous"><span className="fa fa-chevron-left" title="Previous Century" /></th><th className="picker-switch" data-action="pickerSwitch" colSpan={5}>2000-2090</th><th className="next" data-action="next"><span className="fa fa-chevron-right" title="Next Century" /></th></tr></thead><tbody><tr><td colSpan={7}><span data-action="selectDecade" className="decade old" data-selection={2006}>1990</span><span data-action="selectDecade" className="decade" data-selection={2006}>2000</span><span data-action="selectDecade" className="decade" data-selection={2016}>2010</span><span data-action="selectDecade" className="decade active" data-selection={2026}>2020</span><span data-action="selectDecade" className="decade" data-selection={2036}>2030</span><span data-action="selectDecade" className="decade" data-selection={2046}>2040</span><span data-action="selectDecade" className="decade" data-selection={2056}>2050</span><span data-action="selectDecade" className="decade" data-selection={2066}>2060</span><span data-action="selectDecade" className="decade" data-selection={2076}>2070</span><span data-action="selectDecade" className="decade" data-selection={2086}>2080</span><span data-action="selectDecade" className="decade" data-selection={2096}>2090</span><span data-action="selectDecade" className="decade old" data-selection={2106}>2100</span></td></tr></tbody></table></div></div></li><li className="picker-switch accordion-toggle" /></ul></div></div>
    </div>
  </div>
  )
  }
export default Cal
