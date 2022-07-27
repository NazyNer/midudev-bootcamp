import {Part} from './Parts.js';
import {Total} from './Total.js';

export const Course = ({course}) =>{
  return (
    <div>
    <h1>{course[0].name}</h1>
    <Part parts={course[0].parts}/>
    <Total parts={course[0].parts} />
    <h1>{course[1].name}</h1>
    <Part parts={course[1].parts}/>
    <Total parts={course[1].parts} />
    </div>
  )
}