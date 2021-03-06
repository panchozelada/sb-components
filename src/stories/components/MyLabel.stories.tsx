import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color:   { control: 'select'
                //, options:['normal', 'h1'] 
                }
    },
    fontColor: { control : 'color'}
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = ( args ) => <MyLabel {...args} />

//copia del template rompiendo la referencia
export const Basic = Template.bind({})
Basic.args = {
    label: 'Hola Mundo!' ,
    size:  'normal',
    allCaps: false
}

export const AllCaps = Template.bind({})
AllCaps.args = {
    size:'h1',
    allCaps: true
}

export const Secondary = Template.bind({})
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({})
CustomFontColor.args ={
    size:   'h1',
    
}

export const CustomBackgroundColor = Template.bind({})
CustomBackgroundColor.args ={
    size:   'h1',
    fontColor: 'white',
    backgroundColor: 'black'
}

export const CustomBackgroundColorTest = Template.bind({})
CustomBackgroundColorTest.args ={
    size:   'h1',
    fontColor: 'blue',
    backgroundColor: 'black'
}