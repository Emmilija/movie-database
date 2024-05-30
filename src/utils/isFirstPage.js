export const isFirstVisit = () => {
    const visited = sessionStorage.getItem('visited');
    if (!visited) {
      sessionStorage.setItem('visited', 'true');
      return true;
    }
    return false;
  };