/* 
const useImageGrid = <T extends Record<string, any> = Record<string, any>, C extends ColumnDef[] = ColumnDef[]>({
    data,
    columns = [{ id: 'mobile', value: 2 }, { id: 'desktop', value: 3 }]
}: Props<T>): Result<T>[] => {
    const calculateGridColumn = (index: number, columnSize: number) => (index % columnSize) + 1;

    const calculateGridRowStart = (index: number, col: ColumnDef, list: T[]) =>
        index < col.value ? 1 : (list?.[index - col.value][col.id].gridRowEnd || 1);

    const calculateGridRowEnd = (index: number, col: ColumnDef, image) => ~~(((1 / image.aspectRatio) * 10));
    //~~((1 - image.aspectRatio) * 100) + gridRowStart - 5;

    return (data ?? []).reduce((list, current, index) =>
        [...list, columns.reduce((styles, col) => {
            const gridColumn = calculateGridColumn(index, col.value);
            const gridRowStart = calculateGridRowStart(index, col, list)

            return {
                ...styles,
                ...current,
                [col.id]: {
                    gridColumnStart: gridColumn,
                    gridColumnEnd: gridColumn,
                    gridRowStart,
                    gridRowEnd: calculateGridRowEnd(index, col, current.image),
                }
            }
        }, [])], [])
}

export default useImageGrid;

  const getStyles = ({ aspectRatio, desktop, mobile, palette }): CSSProperties =>
  ({
    '--aspect-ratio': aspectRatio.toFixed(2),
    '--grid-area': [
      mobile.gridRowStart,
      mobile.gridColumnStart,
      mobile.gridRowEnd,
      mobile.gridColumnEnd,
    ].join(' / '),
    '--grid-area-tablet-and-up': [
      desktop.gridRowStart,
      desktop.gridColumnStart,
      desktop.gridRowEnd,
      desktop.gridColumnEnd,
    ].join(' / '),
    '--color-placeholder': palette?.lightMuted?.background,
  } as CSSProperties);
*/

type ColumnDef = {
    id: 'desktop' | 'mobile';
    value: number;
}

type Result<T extends object = object> =
    Record<ColumnDef['id'], { gridRowEnd: number; }> & T;

interface Props<T extends object> {
    data: T[];
    columns?: ColumnDef[];
}

const useImageGrid = <T extends Record<string, any> = Record<string, any>>({
    data,
    columns = [{ id: 'mobile', value: 2 }, { id: 'desktop', value: 3 }]
}: Props<T>): Result<T>[] => (data ?? []).map<Result<T>>((obj: Result<T>) => ({
    ...obj,
    ...columns.reduce((styles, col) => ({
        ...styles,
        [col.id]: {
            gridRowEnd: ~~(((1 / obj.image?.aspectRatio) * 10))
        }
    }), {})
}))

export default useImageGrid;