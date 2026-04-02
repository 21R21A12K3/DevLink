const API_BASE_URL = "http://localhost:5000/api/resources";

export const getCodesnippets = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}?type=snippets`);
    if(!res.ok){
    return {success: false, error: "Failed to fetch code snippets"};
    }
    const data = await res.json();
    return {success: true, data: data};
  } catch (err) {
    return {success: false, error: err.message};
  }
};

export const getDocuments = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}?type=documents`);
    if(!res.ok){
      return {success: false, error: "Failed to fetch documents"};
    }
    const data = await res.json();
    return {success: true, data: data};
  } catch (err) {
    return {success: false, error: err.message};
  }
};

export const getGitrepos = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}?type=repos`);
    if(!res.ok){
      return {success: false, error: "Failed to fetch Git repositories"};
    }
    const data = await res.json();
    return {success: true, data: data};
  } catch (err) {
    return {success: false, error: err.message};
  }
};

export const getYoutubevideos = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}?type=youtubeVideos`);
    if(!res.ok){
      return {success: false, error: "Failed to fetch YouTube videos"};
    }
    const data = await res.json();
    return {success: true, data: data};
  } catch (err) {
    return {success: false, error: err.message};
  }
};
