import ElevatedButton from '../../../components/ElevatedButton/ElevatedButton';
import { CellElement } from '../../../layouts/Grid/Grid';

export const contents: Array<Array<CellElement>> = [
    [
        {cell: <ElevatedButton>content1</ElevatedButton>},
        {cell: <ElevatedButton>content2</ElevatedButton>}
    ],
    [
        {cell: <ElevatedButton>content3</ElevatedButton>},
        {cell: <ElevatedButton>content4</ElevatedButton>}
    ],
    [
        {cell: <ElevatedButton>content5</ElevatedButton>},
        {cell: <ElevatedButton>content6</ElevatedButton>}
    ],
    [
        {
            middle: 2,
            large: 2,
            cell: <ElevatedButton>content7</ElevatedButton>
        },
        {
            middle: 2,
            large: 2,
            cell: <ElevatedButton>content8</ElevatedButton>
        },
        {
            middle: 2,
            large: 2,
            cell: <ElevatedButton>content9</ElevatedButton>
        },
        {
            middle: 2,
            large: 2,
            cell: <ElevatedButton>content10</ElevatedButton>
        }
    ]
]