import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LogOut,
  Search,
  Trash2,
  CheckCircle,
  Mail,
  Phone,
  Calendar,
  Eye,
  X,
  User,
  Info,
  RefreshCw
} from 'lucide-react';
import {
  getSubmissions,
  updateSubmissionStatus,
  deleteSubmission,
  type ContactSubmission
} from '../lib/contact-service';

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    const isAuth = localStorage.getItem('admin_auth');
    if (!isAuth) {
      navigate('/admin/login');
      return;
    }
    loadSubmissions();
  }, [navigate]);

  const loadSubmissions = async () => {
    setLoading(true);
    try {
      const data = await getSubmissions();
      setSubmissions(data);
    } catch (error) {
      console.error("Failed to load submissions", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    navigate('/admin/login');
  };

  const handleStatusChange = async (id: string, status: ContactSubmission['status']) => {
    await updateSubmissionStatus(id, status);
    loadSubmissions();
    if (selectedSubmission?.id === id) {
      setSelectedSubmission({ ...selectedSubmission, status });
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this submission?')) {
      await deleteSubmission(id);
      loadSubmissions();
      if (selectedSubmission?.id === id) {
        setSelectedSubmission(null);
      }
    }
  };

  const filteredSubmissions = submissions.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.message?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    total: submissions.length,
    new: submissions.filter(s => s.status === 'new').length,
    contacted: submissions.filter(s => s.status === 'contacted').length
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar (Desktop) */}
      <aside className="hidden lg:flex w-72 bg-navy flex-col fixed inset-y-0 shadow-2xl z-20">
        <div className="p-8 border-b border-white/10">
          <h2 className="text-white text-2xl font-bold flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-navy text-sm font-black">T</span>
            </div>
            TrueWaves
          </h2>
          <p className="text-white/40 text-xs mt-1 tracking-widest uppercase">Admin Panel</p>
        </div>

        <nav className="flex-1 p-6 space-y-2">
          <div className="p-4 bg-white/10 rounded-2xl text-white font-medium flex items-center gap-3">
            <Mail className="w-5 h-5 text-accent" />
            Submissions
          </div>
        </nav>

        <div className="p-6 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 p-4 text-white/60 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:pl-72 min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 sticky top-0 z-10 px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-navy">Contact Submissions</h1>
            <p className="text-gray-500 text-sm">Manage your website's contact form data</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-6 py-3 bg-gray-50 rounded-full border-none focus:ring-2 focus:ring-accent w-full sm:w-80 text-sm"
              />
            </div>
            <button
              onClick={loadSubmissions}
              disabled={loading}
              className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-all disabled:opacity-50"
              title="Refresh Data"
            >
              <RefreshCw className={`w-5 h-5 text-navy ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <p className="text-sm font-medium text-gray-500 mb-1">Total Submissions</p>
              <h3 className="text-3xl font-bold text-navy">{stats.total}</h3>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <p className="text-sm font-medium text-gray-500 mb-1">New Inquiries</p>
              <div className="flex items-center gap-3">
                <h3 className="text-3xl font-bold text-navy">{stats.new}</h3>
                {stats.new > 0 && (
                  <span className="px-2 py-1 bg-red-100 text-red-600 text-[10px] font-bold rounded-lg uppercase">Action Required</span>
                )}
              </div>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <p className="text-sm font-medium text-gray-500 mb-1">Already Contacted</p>
              <h3 className="text-3xl font-bold text-navy">{stats.contacted}</h3>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {loading ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-20 text-center">
                        <div className="flex items-center justify-center gap-3 text-gray-400">
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          <span>Fetching submissions from Firebase...</span>
                        </div>
                      </td>
                    </tr>
                  ) : filteredSubmissions.length > 0 ? (
                    filteredSubmissions.map((submission) => (
                      <tr
                        key={submission.id}
                        onClick={() => setSelectedSubmission(submission)}
                        className={`hover:bg-accent/5 transition-colors cursor-pointer group ${submission.status === 'new' ? 'bg-white font-medium' : 'bg-white/50'}`}
                      >
                        <td className="px-6 py-5 text-sm text-gray-500">
                          {new Date(submission.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-5">
                          <span className="text-navy font-bold">{submission.name}</span>
                        </td>
                        <td className="px-6 py-5 text-sm text-gray-500">
                          {submission.email}
                        </td>
                        <td className="px-6 py-5">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${submission.status === 'new' ? 'bg-navy text-white' :
                              submission.status === 'read' ? 'bg-blue-100 text-blue-600' :
                                'bg-green-100 text-green-600'
                            }`}>
                            {submission.status}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-right">
                          <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleStatusChange(submission.id, 'contacted');
                              }}
                              className="p-2 hover:bg-green-100 text-green-600 rounded-lg transition-colors"
                              title="Mark as Contacted"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(submission.id);
                              }}
                              className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                              title="Delete Submission"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-20 text-center text-gray-400 italic">
                        No submissions found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedSubmission && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSubmission(null)}
              className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden"
            >
              <div className="absolute top-6 right-6">
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              <div className="p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center">
                    <User className="w-8 h-8 text-navy" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-navy">{selectedSubmission.name}</h2>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(selectedSubmission.createdAt).toLocaleString()}
                      </span>
                      <span className="px-2 py-0.5 bg-navy/10 text-navy rounded-md text-[10px] font-bold uppercase">
                        {selectedSubmission.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</p>
                    <a href={`mailto:${selectedSubmission.email}`} className="text-navy font-medium flex items-center gap-2 hover:text-accent transition-colors">
                      <Mail className="w-4 h-4" />
                      {selectedSubmission.email}
                    </a>
                  </div>
                  {selectedSubmission.phone && (
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone Number</p>
                      <a href={`tel:${selectedSubmission.phone}`} className="text-navy font-medium flex items-center gap-2 hover:text-accent transition-colors">
                        <Phone className="w-4 h-4" />
                        {selectedSubmission.phone}
                      </a>
                    </div>
                  )}
                  {selectedSubmission.inquiry && (
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Inquiry Type</p>
                      <p className="text-navy font-medium flex items-center gap-2">
                        <Info className="w-4 h-4" />
                        {selectedSubmission.inquiry}
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-3 bg-gray-50 rounded-3xl p-8 mb-10">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message</p>
                  <p className="text-navy leading-relaxed italic text-lg">
                    "{selectedSubmission.message || 'No message provided.'}"
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100">
                  <button
                    onClick={() => handleStatusChange(selectedSubmission.id, 'contacted')}
                    className="flex-1 py-4 bg-green-500 text-white rounded-2xl font-bold hover:bg-green-600 transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Mark as Contacted
                  </button>
                  <button
                    onClick={() => handleStatusChange(selectedSubmission.id, 'read')}
                    className="flex-1 py-4 bg-navy text-white rounded-2xl font-bold hover:bg-navy/90 transition-all flex items-center justify-center gap-2"
                  >
                    <Eye className="w-5 h-5" />
                    Mark as Read
                  </button>
                  <button
                    onClick={() => handleDelete(selectedSubmission.id)}
                    className="p-4 bg-red-100 text-red-600 rounded-2xl font-bold hover:bg-red-200 transition-all"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
