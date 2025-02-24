import { ReactNode, useState } from 'react';
import './App.css';

function GridContainer({ children }: { children: ReactNode })
{
    return <div className="container">{ children }</div>;
}

function App()
{
    const [gridSize, setGridSize] = useState(0);
    const grid = [];
    const gridSquare = document.querySelectorAll<HTMLElement>('.container__row');
    let trigger= false;
    document.addEventListener('mousedown', function(){
        trigger= true;
    });
    document.addEventListener('mouseup', function(){
        trigger= false;
    });

    const handleClick = () =>
    {
        if (gridSquare) {
            gridSquare.forEach((el) => el.style.setProperty('--grid_opacity', '0'));
        }

        const getGridSize = parseInt(
            prompt('Enter size of new grid. Can be a number between 1 - 100.', '16')!
        );
        setGridSize(getGridSize);

        if (getGridSize > 100 || getGridSize <= 0 || isNaN(getGridSize)) {
            alert('Must be a number between 1 - 100');
        }
    }
    const handleReset = () =>
    {
        if (gridSquare) {
            gridSquare.forEach((el) => el.style.setProperty('--grid_opacity', '0'));
        }
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLElement> ) =>
    {
        e.preventDefault();
        const currOpacity = parseFloat(
            window.getComputedStyle(e.currentTarget).getPropertyValue('--grid_opacity')
            );
        if (trigger === true) {
            const opacityPlus = Math.min(currOpacity + 0.1, 1);
            e.currentTarget.style.setProperty('--grid_opacity', opacityPlus.toString());
        } else if (trigger === false) {
            const opacityMinus = Math.max(currOpacity - 0.1, 0);
            e.currentTarget.style.setProperty('--grid_opacity', opacityMinus.toString());
        }
    };

    for (let i = 0; i < gridSize * gridSize; i++) {
        grid.push(
            <div
                className="container__row"
                key={ i }
                onMouseEnter={ handleMouseEnter }
                style={ { width: 100 / gridSize + '%' } }
                onDragStart={(e) => {e.preventDefault()}}
            ></div>
        );
    }

    return (
        <div>
            <p className='title'>Etch A Sketch</p>
            <p className='instruction'>To use, first pick a grid size, then hold down mouse button and move cursor to start drawing. <br></br>
                (to use the cursor as an eraser instead, just release the mouse button)</p>
            <div className="container-two">
                <GridContainer>{ grid }</GridContainer>
            </div>
            <div className='btn-wrapper'> 
            <div className='btn-container'>
            <button className="size btn" onClick={ handleClick }>
                Grid Size
            </button>
            <button className="clear btn" onClick={ handleReset }>
                Shake
            </button>
            </div>
            </div> 
            <p className='credit'>This project is part of theOdinProject curriculum.</p>
        </div>
    );
}

export default App;
