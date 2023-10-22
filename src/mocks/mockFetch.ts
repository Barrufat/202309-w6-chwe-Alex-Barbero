export const mockFetch = (data: unknown) =>
  jest.fn().mockImplementation(async () =>
    Promise.resolve({
      ok: true,
      json: () => data,
    }),
  );
