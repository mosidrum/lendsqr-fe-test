export const statusColours = (status: string) => {
  switch (status) {
    case 'active': {
      return { backgroundColor: '#e6fbee', color: '#39cd62' };
    }
    case 'blacklisted': {
      return { backgroundColor: '#fde6eb', color: '#e4053a' };
    }
    case 'inactive': {
      return { backgroundColor: '#f5f5f7', color: '#545f7d' };
    }
    case 'pending': {
      return { backgroundColor: '#fdf7e6', color: '#e9b200' };
    }
    default: {
      return { backgroundColor: 'transparent', color: '#000' };
    }
  }
};
