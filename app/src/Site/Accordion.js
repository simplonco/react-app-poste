import React from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

const content = [
  {
    title: 'what',
    text:'A dog is a type of domesticated animal. Known for its loyalty and faithfulness,'
  },
  {
    title: 'where',
    text:'it can be found as a welcome guest in many households across the world.'
  },
  {
    title: 'who',
    text:'There are many breeds of dogs. Each breed varies in size and temperament.'
  }
];


const AccordionExampleStandard = () => (
  <Accordion>
    {
      content.map(
        <Accordion.Title>
          <Icon name='dropdown' />
          {ctt.title}
        </Accordion.Title>
        <Accordion.Content>
          <p>
            {ctt.text}
          </p>
        </Accordion.Content>
      )
    }
  </Accordion>
)

export default AccordionExampleStandard