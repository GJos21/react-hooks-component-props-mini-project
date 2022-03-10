import React from 'react';
import ReadTime from './ReadTime';

function Article(
  {
    title,
    date = "January 1, 1970",
    preview,
    minutes
  }
) {
  const coffee = "☕️";
  const dinner = "🍱"
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
        {minutes < 30
          ? <ReadTime count={Math.ceil(minutes / 5)} emoji={coffee} minutes={minutes}/>
          : <ReadTime count={Math.ceil(minutes / 10)} emoji={dinner} minutes={minutes} />
        }
      <p>{preview}</p>
    </article>
  )
}

export default Article