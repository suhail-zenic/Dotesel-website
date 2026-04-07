import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteScrollProvider } from './context/SiteScrollContext'
import { ScrollToTop } from './components/ScrollToTop'
import { SiteLayout } from './components/SiteLayout'
import HomePage from './pages/HomePage'

const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'))
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'))
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'))

function PageLoading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center bg-slate-950 text-sm text-slate-500" aria-live="polite">
      Loading…
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteScrollProvider>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/solutions"
              element={
                <Suspense fallback={<PageLoading />}>
                  <SolutionsPage />
                </Suspense>
              }
            />
            <Route
              path="/industries"
              element={
                <Suspense fallback={<PageLoading />}>
                  <IndustriesPage />
                </Suspense>
              }
            />
            <Route
              path="/case-studies"
              element={
                <Suspense fallback={<PageLoading />}>
                  <CaseStudiesPage />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<PageLoading />}>
                  <AboutPage />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<PageLoading />}>
                  <ContactPage />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </SiteScrollProvider>
    </BrowserRouter>
  )
}
