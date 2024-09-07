import { Experience } from '@/types';
import React from 'react'

type Props = {
  item: Experience;
}

const ExperienceItem = ({item}: Props) => {
  return (
    <div>
      <p>{item.role}</p>
      <p>{item.where}</p>
      <p>{item.when}</p>
      <p>{item.description}</p>
    </div>
  )
}

export default ExperienceItem