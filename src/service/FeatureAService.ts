import type { PageData } from '@/type/PageData'

export const fetchOptionsFromEndpoint1 = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
      ]);
    }, 500);
  });
};

export const fetchOptionsFromEndpoint2 = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { value: 'optionA', label: 'Option A' },
        { value: 'optionB', label: 'Option B' },
        { value: 'optionC', label: 'Option C' }
      ]);
    }, 500);
  });
};

export const queryData = async (params: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const total = fakeData.length
      const size = params.rows
      const totalPage = Math.ceil(total / size)
      const currentPage = params.page
      const start = (currentPage - 1) * size
      const end = currentPage === totalPage ? total : start + size
      const data = fakeData.slice(start, end)
      const mockPageData: PageData = {
        records: total,
        pageSize: size,
        page: currentPage,
        rows: data
      };
      resolve({ data: mockPageData });
    }, 500);
  });
};

const fakeData = [
  {
    COLUMN_A: 'Data 1-A',
    COLUMN_B: 'Data 1-B',
    COLUMN_C: 'Data 1-C',
    COLUMN_D: 'Data 1-D',
    COLUMN_E: 'Data 1-E',
    COLUMN_F: 'Data 1-F',
    COLUMN_G: 'Data 1-G'
  },
  {
    COLUMN_A: 'Data 2-A',
    COLUMN_B: 'Data 2-B',
    COLUMN_C: 'Data 2-C',
    COLUMN_D: 'Data 2-D',
    COLUMN_E: 'Data 2-E',
    COLUMN_F: 'Data 2-F',
    COLUMN_G: 'Data 2-G'
  },
  {
    COLUMN_A: 'Data 3-A',
    COLUMN_B: 'Data 3-B',
    COLUMN_C: 'Data 3-C',
    COLUMN_D: 'Data 3-D',
    COLUMN_E: 'Data 3-E',
    COLUMN_F: 'Data 3-F',
    COLUMN_G: 'Data 3-G'
  },
  {
    COLUMN_A: 'Data 4-A',
    COLUMN_B: 'Data 4-B',
    COLUMN_C: 'Data 4-C',
    COLUMN_D: 'Data 4-D',
    COLUMN_E: 'Data 4-E',
    COLUMN_F: 'Data 4-F',
    COLUMN_G: 'Data 4-G'
  },
  {
    COLUMN_A: 'Data 5-A',
    COLUMN_B: 'Data 5-B',
    COLUMN_C: 'Data 5-C',
    COLUMN_D: 'Data 5-D',
    COLUMN_E: 'Data 5-E',
    COLUMN_F: 'Data 5-F',
    COLUMN_G: 'Data 5-G'
  },
  {
    COLUMN_A: 'Data 6-A',
    COLUMN_B: 'Data 6-B',
    COLUMN_C: 'Data 6-C',
    COLUMN_D: 'Data 6-D',
    COLUMN_E: 'Data 6-E',
    COLUMN_F: 'Data 6-F',
    COLUMN_G: 'Data 6-G'
  },
  {
    COLUMN_A: 'Data 7-A',
    COLUMN_B: 'Data 7-B',
    COLUMN_C: 'Data 7-C',
    COLUMN_D: 'Data 7-D',
    COLUMN_E: 'Data 7-E',
    COLUMN_F: 'Data 7-F',
    COLUMN_G: 'Data 7-G'
  },
  {
    COLUMN_A: 'Data 8-A',
    COLUMN_B: 'Data 8-B',
    COLUMN_C: 'Data 8-C',
    COLUMN_D: 'Data 8-D',
    COLUMN_E: 'Data 8-E',
    COLUMN_F: 'Data 8-F',
    COLUMN_G: 'Data 8-G'
  },
  {
    COLUMN_A: 'Data 9-A',
    COLUMN_B: 'Data 9-B',
    COLUMN_C: 'Data 9-C',
    COLUMN_D: 'Data 9-D',
    COLUMN_E: 'Data 9-E',
    COLUMN_F: 'Data 9-F',
    COLUMN_G: 'Data 9-G'
  },
  {
    COLUMN_A: 'Data 10-A',
    COLUMN_B: 'Data 10-B',
    COLUMN_C: 'Data 10-C',
    COLUMN_D: 'Data 10-D',
    COLUMN_E: 'Data 10-E',
    COLUMN_F: 'Data 10-F',
    COLUMN_G: 'Data 10-G'
  },
  {
    COLUMN_A: 'Data 11-A',
    COLUMN_B: 'Data 11-B',
    COLUMN_C: 'Data 11-C',
    COLUMN_D: 'Data 11-D',
    COLUMN_E: 'Data 11-E',
    COLUMN_F: 'Data 11-F',
    COLUMN_G: 'Data 11-G'
  },
  {
    COLUMN_A: 'Data 12-A',
    COLUMN_B: 'Data 12-B',
    COLUMN_C: 'Data 12-C',
    COLUMN_D: 'Data 12-D',
    COLUMN_E: 'Data 12-E',
    COLUMN_F: 'Data 12-F',
    COLUMN_G: 'Data 12-G'
  },
  {
    COLUMN_A: 'Data 13-A',
    COLUMN_B: 'Data 13-B',
    COLUMN_C: 'Data 13-C',
    COLUMN_D: 'Data 13-D',
    COLUMN_E: 'Data 13-E',
    COLUMN_F: 'Data 13-F',
    COLUMN_G: 'Data 13-G'
  },
  {
    COLUMN_A: 'Data 14-A',
    COLUMN_B: 'Data 14-B',
    COLUMN_C: 'Data 14-C',
    COLUMN_D: 'Data 14-D',
    COLUMN_E: 'Data 14-E',
    COLUMN_F: 'Data 14-F',
    COLUMN_G: 'Data 14-G'
  },
  {
    COLUMN_A: 'Data 15-A',
    COLUMN_B: 'Data 15-B',
    COLUMN_C: 'Data 15-C',
    COLUMN_D: 'Data 15-D',
    COLUMN_E: 'Data 15-E',
    COLUMN_F: 'Data 15-F',
    COLUMN_G: 'Data 15-G'
  },
  {
    COLUMN_A: 'Data 16-A',
    COLUMN_B: 'Data 16-B',
    COLUMN_C: 'Data 16-C',
    COLUMN_D: 'Data 16-D',
    COLUMN_E: 'Data 16-E',
    COLUMN_F: 'Data 16-F',
    COLUMN_G: 'Data 16-G'
  },
  {
    COLUMN_A: 'Data 17-A',
    COLUMN_B: 'Data 17-B',
    COLUMN_C: 'Data 17-C',
    COLUMN_D: 'Data 17-D',
    COLUMN_E: 'Data 17-E',
    COLUMN_F: 'Data 17-F',
    COLUMN_G: 'Data 17-G'
  },
  {
    COLUMN_A: 'Data 18-A',
    COLUMN_B: 'Data 18-B',
    COLUMN_C: 'Data 18-C',
    COLUMN_D: 'Data 18-D',
    COLUMN_E: 'Data 18-E',
    COLUMN_F: 'Data 18-F',
    COLUMN_G: 'Data 18-G'
  },
  {
    COLUMN_A: 'Data 19-A',
    COLUMN_B: 'Data 19-B',
    COLUMN_C: 'Data 19-C',
    COLUMN_D: 'Data 19-D',
    COLUMN_E: 'Data 19-E',
    COLUMN_F: 'Data 19-F',
    COLUMN_G: 'Data 19-G'
  },
  {
    COLUMN_A: 'Data 20-A',
    COLUMN_B: 'Data 20-B',
    COLUMN_C: 'Data 20-C',
    COLUMN_D: 'Data 20-D',
    COLUMN_E: 'Data 20-E',
    COLUMN_F: 'Data 20-F',
    COLUMN_G: 'Data 20-G'
  }
];
