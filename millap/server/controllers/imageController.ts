function getImageById(req: Express.Request, res: Express.Response): boolean {
  return true;
}

function getImagesByTitle(
  req: Express.Request,
  res: Express.Response,
): boolean {
  findProjectByTitle('hi');
  return true;
}

function findProjectByTitle(term: string) {
  return term;
}

export { getImageById, getImagesByTitle };
