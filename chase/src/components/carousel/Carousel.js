import React, { Component } from "react";
import ImageSlide from "./ImageSlide";
import Arrow from "./Arrow";
import { ReactComponent as MoneyCheck } from "../../svgs/money-check.svg";
import { ReactComponent as PiggyBank } from "../../svgs/piggy-bank.svg";
import { ReactComponent as Car } from "../../svgs/car-side.svg";
import { ReactComponent as Home } from "../../svgs/home.svg";
import { ReactComponent as Briefcase } from "../../svgs/briefcase.svg";
import { ReactComponent as CreditCard } from "../../svgs/credit-card.svg";
import { ReactComponent as Tachometer } from "../../svgs/tachometer.svg";
import { ReactComponent as PrivateClient } from "../../svgs/private-clients.svg";
import { ReactComponent as Invest } from "../../svgs/invest.svg";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 0,
      second: 1,
      third: 2,
      fourth: 3,
      fifth: 4,
      imgUrls: [
        { icon: Tachometer, subtitle: "Free Credit Score" },
        { icon: CreditCard, subtitle: "Find a credit card" },
        { icon: Home, subtitle: "Home Lending" },
        { icon: Car, subtitle: "Car Buying & Loans" },
        { icon: PiggyBank, subtitle: "Savings Accounts & CDs" },
        { icon: Briefcase, subtitle: "Chase for Business" },
        { icon: PrivateClient, subtitle: "Chase Private Client" },
        { icon: Invest, subtitle: "Invest" },
        { icon: MoneyCheck, subtitle: "Schedule a meeting" }
      ]
    };
  }
  //working
  previousSlide = () => {
    const lastIndex = this.state.imgUrls.length - 1;
    const { first, second, third, fourth, fifth } = this.state;
    const n_first = first === 0 ? lastIndex : first - 1;
    // console.log(n_first);
    this.setState({
      first: n_first
    });
    const n_second = second === 0 ? lastIndex : second - 1;
    this.setState({
      second: n_second
    });
    const n_third = third === 0 ? lastIndex : third - 1;
    this.setState({
      third: n_third
    });
    const n_fourth = fourth === 0 ? lastIndex : fourth - 1;
    this.setState({
      fourth: n_fourth
    });
    const n_fifth = fifth === 0 ? lastIndex : fifth - 1;
    this.setState({
      fifth: n_fifth
    });
    console.log(this.state);
  };

  nextSlide = () => {
    const lastIndex = this.state.imgUrls.length - 1;
    const { first, second, third, fourth, fifth } = this.state;
    const n_first = first === lastIndex ? 0 : first + 1;
    this.setState({
      first: n_first
    });
    const n_second = second === lastIndex ? 0 : second + 1;
    this.setState({
      second: n_second
    });
    const n_third = third === lastIndex ? 0 : third + 1;
    this.setState({
      third: n_third
    });
    const n_fourth = fourth === lastIndex ? 0 : fourth + 1;
    this.setState({
      fourth: n_fourth
    });
    const n_fifth = fifth === lastIndex ? 0 : fifth + 1;
    this.setState({
      fifth: n_fifth
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className='carousel__heading--container'>
          <span className='carousel__heading'>Choose what's right for you</span>
        </div>
        <div
          className='carousel_container'
          //style={{ height: '148px', width: '100%', backgroundColor: 'yellow' }}
        >
          <div className='slide_arrow--left'>
            <Arrow
              direction='left'
              clickFunction={this.previousSlide}
              glyph={<i class='fa fa-angle-left'></i>}
            />
          </div>
          <div
            style={{
              width: "auto",
              // height: 'inherit',
              width: "inherit",
              backgroundColor: "blue",
              display: "flex",
              "justify-content": "center"
            }}
          >
            <ImageSlide
              Icon={this.state.imgUrls[this.state.first].icon}
              subtitle={this.state.imgUrls[this.state.first].subtitle}
            />
            <ImageSlide
              Icon={this.state.imgUrls[this.state.second].icon}
              subtitle={this.state.imgUrls[this.state.second].subtitle}
            />
            <ImageSlide
              Icon={this.state.imgUrls[this.state.third].icon}
              subtitle={this.state.imgUrls[this.state.third].subtitle}
            />
            <ImageSlide
              Icon={this.state.imgUrls[this.state.fourth].icon}
              subtitle={this.state.imgUrls[this.state.fourth].subtitle}
              hide='d-s-block'
            />
            <ImageSlide
              Icon={this.state.imgUrls[this.state.fifth].icon}
              subtitle={this.state.imgUrls[this.state.fifth].subtitle}
              hide='d-s-block'
            />
          </div>
          <div className='slide_arrow--right'>
            <Arrow
              direction='right'
              clickFunction={this.nextSlide}
              glyph={<i class='fa fa-angle-right'></i>}
            />
          </div>
        </div>
        {/* <Arrow
          direction='left'
          clickFunction={this.previousSlide}
          glyph={<i class='fa fa-angle-left'></i>}
        />
        <ImageSlide
          Icon={this.state.imgUrls[this.state.first].icon}
          subtitle={this.state.imgUrls[this.state.first].subtitle}
        />
        <ImageSlide
          Icon={this.state.imgUrls[this.state.second].icon}
          subtitle={this.state.imgUrls[this.state.second].subtitle}
        />
        <ImageSlide
          Icon={this.state.imgUrls[this.state.third].icon}
          subtitle={this.state.imgUrls[this.state.third].subtitle}
        />
        <ImageSlide
          Icon={this.state.imgUrls[this.state.fourth].icon}
          subtitle={this.state.imgUrls[this.state.fourth].subtitle}
          hide='d-s-block'
        />
        <ImageSlide
          Icon={this.state.imgUrls[this.state.fifth].icon}
          subtitle={this.state.imgUrls[this.state.fifth].subtitle}
          hide='d-s-block'
        />
        <Arrow
          direction='right'
          clickFunction={this.nextSlide}
          glyph={<i class='fa fa-angle-right'></i>}
        /> */}
      </div>
    );
  }
}

export default Carousel;
