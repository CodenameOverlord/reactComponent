// export default function TabButton(props){
//     return <li><button>{props.children}</button></li>
// }

export default function TabButton({children, onSelect, isSelected}){
    console.log('TabButton component rendering')
    return <li><button className={isSelected? 'active': undefined} onClick={onSelect}>{children}</button></li>
}