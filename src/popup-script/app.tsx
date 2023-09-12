import { createRoot } from 'react-dom/client';
import { Root } from './components/Root';

const elementToBind = document.getElementById('popupApp')

if (!!elementToBind){
    // Render your React component instead
    const root = createRoot(elementToBind);
    root.render(<Root/>);
}