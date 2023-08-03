import { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTable, useGlobalFilter, useSortBy, usePagination } from 'react-table';
import TableContainer from '@mui/material/TableContainer';
import Autocomplete from '@mui/material/Autocomplete';
import Table from '@mui/material/Table';
import MUIBox from '../../components/MUIBox';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import DataTableHeadCell from './DataTableHeadCell';
import DataTableBodyCell from './DataTableBodyCell';
import MUIInput from '../../components/MUIInput';
import MUITypography from '../../components/MUITypography';
import MUIPagination from '../../components/MUIPagination';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const DataTable = ({
  entriesPerPage,
  canSearch,
  showTotalEntries,
  table,
  pagination,
  // isSorted,
  noEndBorder,
}) => {
  const defaultValue = entriesPerPage.defaultValue || 10;
  const entries = entriesPerPage.entries
    ? entriesPerPage.entries.map((el) => el.toString())
    : [5, 10, 25, 100];

  const columns = useMemo(() => table.columns, [table]);
  const data = useMemo(() => table.rows, [table]);

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    pageOptions,
    canPreviousPage,
    canNextPage,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;

  useEffect(() => setPageSize(defaultValue || 10), [defaultValue, setPageSize]);

  const handleSetPageSize = (value) => setPageSize(value);

  const renderPagination = pageOptions.map((option) => (
    <MUIPagination
      key={option}
      item
      active={pageIndex === option}
      onClick={() => gotoPage(parseInt(option))}
    >
      {option + 1}
    </MUIPagination>
  ));

  const customizedPageOptions = pageOptions.map((option) => option + 1);

  const handleInputPaginationValue = ({ target: value }) =>
    gotoPage(Number(value.value - 1));

  return (
    <TableContainer sx={{ boxShadow: 'none' }}>
      {(entriesPerPage || canSearch) && (
        <MUIBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          {entriesPerPage && (
            <MUIBox display="flex" alignItems="center">
              <Autocomplete
                disableClearable
                value={pageSize.toString()}
                options={entries}
                size="small"
                sx={{ width: '5rem' }}
                renderInput={(params) => <MUIInput {...params} />}
                onChange={(_, value) => handleSetPageSize(parseInt(value, 10))}
              />
            </MUIBox>
          )}
          {canSearch && (
            <MUIBox width="12rem" ml="auto">
              <MUIInput placeholder="Search..." size="small" fullWidth />
            </MUIBox>
          )}
        </MUIBox>
      )}

      <Table {...getTableProps()}>
        <MUIBox component="thead">
          {headerGroups.map((headerGroup, key) => (
            <TableRow key={key} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((header, key) => (
                <DataTableHeadCell
                  key={key}
                  width={header.width ? header.width : 'auto'}
                  align={header.align ? header.align : 'left'}
                  {...header.getHeaderProps()}
                >
                  {header.render('Header')}
                </DataTableHeadCell>
              ))}
            </TableRow>
          ))}
        </MUIBox>
        <TableBody {...getTableBodyProps}>
          {page.map((row, key) => {
            prepareRow(row);

            return (
              <TableRow key={key} {...row.getRowProps()}>
                {row.cells.map((cell, key) => (
                  <DataTableBodyCell
                    key={key}
                    noBorder={noEndBorder && rows.length - 1 === key}
                    align={cell.column.align || 'left'}
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </DataTableBodyCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <MUIBox
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        p={!showTotalEntries && pageOptions.length === 1 ? 0 : 3}
      >
        {showTotalEntries && (
          <MUIBox mb={{ xs: 3, sm: 0 }}>
            <MUITypography variant="button" color="secondary" fontWeight="regular">
              Showing 1 to 2 of 6 enteries
            </MUITypography>
          </MUIBox>
        )}

        {pageOptions.length > 1 && (
          <MUIPagination variant={pagination.variant ? pagination.variant : 'gradient'}>
            {canPreviousPage && (
              <MUIPagination item onClick={() => previousPage()}>
                <ChevronLeftRoundedIcon />
              </MUIPagination>
            )}

            {renderPagination.length > 6 ? (
              <MUIBox width="5rem" mx={1}>
                <MUIInput
                  inputProps={{
                    type: 'number',
                    min: 1,
                    max: customizedPageOptions.length,
                  }}
                  value={customizedPageOptions[pageIndex]}
                  onChange={handleInputPaginationValue}
                ></MUIInput>
              </MUIBox>
            ) : (
              renderPagination
            )}

            {canNextPage && (
              <MUIPagination item onClick={() => nextPage()}>
                <ChevronRightRoundedIcon />
              </MUIPagination>
            )}
          </MUIPagination>
        )}
      </MUIBox>
    </TableContainer>
  );
};

DataTable.defaultProps = {
  entriesPerPage: { defaultValue: 10, entries: [5, 10, 25, 100] },
  canSearch: true,
  showTotalEntries: true,
  pagination: { variant: 'gradient' },
  isSorted: true,
  noEndBorder: false,
};

DataTable.propTypes = {
  entriesPerPage: PropTypes.oneOfType([
    PropTypes.shape({
      defaultValue: PropTypes.number,
      entries: PropTypes.arrayOf(PropTypes.number),
    }),
    PropTypes.bool,
  ]),
  canSearch: PropTypes.bool,
  showTotalEntries: PropTypes.bool,
  table: PropTypes.objectOf(PropTypes.array).isRequired,
  pagination: PropTypes.shape({
    variant: PropTypes.oneOf(['contained', 'gradient']),
    color: PropTypes.oneOf([
      'primary',
      'secondary',
      'info',
      'success',
      'warning',
      'error',
      'dark',
      'light',
    ]),
  }),
  isSorted: PropTypes.bool,
  noEndBorder: PropTypes.bool,
};

export default DataTable;
