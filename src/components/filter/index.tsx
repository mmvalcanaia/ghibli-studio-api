import axios from 'axios';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { Movie, YearFilterOption } from '../../types';
import './styles.css';

function Filter() {
  const [filterOptions, setFilterOptions] = useState<YearFilterOption[]>([]);

  useEffect(() => {
    axios.get<Movie[]>('https://ghibliapi.herokuapp.com/films').then((response) => {
      const yearSet = new Set(
        response.data.map((item) => {
          return item.release_date;
        })
      );

      const yearArray = Array.from(yearSet);

      const option = yearArray.map((item) => {
        const yearFilterOption: YearFilterOption = {
          value: item,
          label: item.toString()
        };
        return yearFilterOption;
      });

      setFilterOptions(option);
    });
  }, []);

  return (
    <div className="filter-container">
      <Select
        options={filterOptions}
        classNamePrefix="filter-input"
        placeholder="Filter movies by year"
        isMulti
        isClearable
        getOptionLabel={(year: YearFilterOption) => year.label}
        getOptionValue={(year: YearFilterOption) => String(year.value)}
      />
    </div>
  );
}

export default Filter;
