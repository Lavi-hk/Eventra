import React, { useState, useEffect } from 'react';
import { Calendar, Star, User } from 'lucide-react';
import { getAuth } from 'firebase/auth';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
}

interface Review {
  id: string;
  eventTitle: string;
  rating: number;
  comment: string;
  date: string;
}

const Profile = () => {
  const [userName, setUserName] = useState('');
  const [registeredEvents, setRegisteredEvents] = useState<Event[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      // Extract name from email (everything before @)
      const nameFromEmail = user.email?.split('@')[0] || 'User';
      setUserName(nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1));
    }

    // Simulated data - replace with actual API calls
    setRegisteredEvents([
      {
        id: '1',
        title: 'Tech Conference 2024',
        date: '2024-05-15',
        time: '10:00 AM'
      },
      {
        id: '2',
        title: 'Web Development Workshop',
        date: '2024-05-20',
        time: '2:00 PM'
      }
    ]);

    setReviews([
      {
        id: '1',
        eventTitle: 'Tech Conference 2024',
        rating: 5,
        comment: 'Amazing event with great speakers!',
        date: '2024-05-15'
      }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-8">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-teal-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">{userName}</h1>
                <p className="text-teal-100">Student</p>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'profile'
                    ? 'border-b-2 border-teal-500 text-teal-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'events'
                    ? 'border-b-2 border-teal-500 text-teal-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Registered Events
              </button>
              <button
                onClick={() => setActiveTab('calendar')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'calendar'
                    ? 'border-b-2 border-teal-500 text-teal-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Calendar
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'reviews'
                    ? 'border-b-2 border-teal-500 text-teal-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Reviews
              </button>
            </nav>
          </div>

          {/* Content Sections */}
          <div className="p-6">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
                  <div className="space-y-2">
                    <p><span className="font-medium">Name:</span> {userName}</p>
                    <p><span className="font-medium">Email:</span> {getAuth().currentUser?.email}</p>
                    <p><span className="font-medium">Role:</span> Student</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'events' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold mb-4">Registered Events</h2>
                <div className="grid gap-4">
                  {registeredEvents.map((event) => (
                    <div key={event.id} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium">{event.title}</h3>
                      <p className="text-sm text-gray-600">Date: {event.date}</p>
                      <p className="text-sm text-gray-600">Time: {event.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'calendar' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold mb-4">Event Calendar</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Calendar className="w-6 h-6 text-teal-600 mb-4" />
                  <div className="space-y-4">
                    {registeredEvents.map((event) => (
                      <div key={event.id} className="border-l-4 border-teal-500 pl-4">
                        <h3 className="font-medium">{event.title}</h3>
                        <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold mb-4">Your Reviews</h2>
                <div className="grid gap-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{review.eventTitle}</h3>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm">{review.rating}/5</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{review.comment}</p>
                      <p className="text-xs text-gray-500 mt-2">Posted on {review.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 