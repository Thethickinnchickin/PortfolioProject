/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './CardItem.css'

function CardItem(props) {
  if(props.link && !props.path)
  {
    return (
      <>
        <li className='cards__item'>
            <a className='cards__item__link' href={props.link}>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                  <img src={props.src} alt='Project Image' className='cards__item__img'/>
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
                    <a className='link' href={props.link}>here</a>
                </div>
            </a>
        </li>
      </>
    );
  } else if(props.link && props.path) {
    return (
      <>
        <li className='cards__item'>
            <a className='cards__item__link' href={props.path}>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                  <img src={props.src} alt='Project Image' className='cards__item__img'/>
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
                    <a className='link' href={props.path}>{props.link}</a>
                </div>
            </a>
        </li>
      </>
  );
  } else {
      return (
      <>
        <li className='cards__item'>
            <a className='cards__item__link' href={props.path}>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                  <img src={props.src} alt='Project Image' className='cards__item__img'/>
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
                </div>
            </a>
        </li>
      </>
  );
  }

}

export default CardItem;
