import CONFIG from '../constant/config';
const CacheHelper = {
  async cachingApp(request) {
    const cache = await this._openCache();
    cache.addAll(request);
    console.log('adding cache');
  },
  async revalidateCache(request) {
    console.log('revalidate cache');
    const response = await caches.match(request);
    if (response) {
      this._fetchRequest(request);
      return response;
    }
    return this._fetchRequest(request);
  },
  async deleteCache() {
    console.log('Delete cache');
    const cacheNames = await caches.keys();
    cacheNames.filter((name)=> name !==CONFIG.CACHE_NAME)
        .map((filteredName)=>caches.delete(filteredName));
  },
  async _fetchRequest(request) {
    const response = await fetch(request);
    if (!response || response.status !== 200) {
      return response;
    }
    await this._addingCache(request);
    return response;
  },
  async _addingCache(request) {
    const cache = await this._openCache();
    cache.add(request);
  },
  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },
};

export default CacheHelper;
