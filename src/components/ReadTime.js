import React from 'react'

function ReadTime({ count, emoji, minutes }) {
  let emojis = "";
  return (
    <span>{` ${emojis.padStart(count * 2, emoji)} ${minutes} min read`}</span>
  )
}

export default ReadTime