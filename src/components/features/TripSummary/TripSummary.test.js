import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe ('Component TripSummary', () => {
  it ('generates correct link', () => {
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary id='abc' image='image.png' name='name' cost='cost' days={1} tags={['tag1', 'tag2','tag3']} />);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('has correct img and alt', () => {
    const expectedImage = 'image.png';
    const expectedAlt = 'alternative';
    const component = shallow (<TripSummary id='' image={expectedImage} name={expectedAlt} cost='' days={1} tags={['tag1', 'tag2','tag3']} />);
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('has correct days, cost, name', () => {
    const expectedDays = 1;
    const expectedCost = 'cost';
    const expectedName = 'name';
    const component = shallow(<TripSummary id='' image='' name={expectedName} cost={expectedCost} days={expectedDays} tags={['tag1', 'tag2','tag3']} />);
    expect(component).toBeTruthy;
  });

  it('shold thorow an error without props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  
  it('renders tags in spans in the correct order', ()=> {
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary id='' image='' name='' cost='' days={1} tags={expectedTags} />);
    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });

  it('should not render div with tag class if tags prop is not given', ()=> {
    const expectedTags = [];
    const component = shallow(<TripSummary id='' image='' name='' cost='' days={1} tags={expectedTags} />);
    expect(component.find('tags div').exists(expectedTags)).toBe(false);
    //console.log(component.debug());

  });
});