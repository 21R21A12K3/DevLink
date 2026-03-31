const API_BASE_URL = "http://localhost:5000/api";

export const getCodesnippets = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/codesnippets`);
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
    const res = await fetch(`${API_BASE_URL}/documents`);
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
    const res = await fetch(`${API_BASE_URL}/git`);
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
    const res = await fetch(`${API_BASE_URL}/youtube-videos`);
    if(!res.ok){
      return {success: false, error: "Failed to fetch YouTube videos"};
    }
    const data = await res.json();
    return {success: true, data: data};
  } catch (err) {
    return {success: false, error: err.message};
  }
};
